<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Mail\CampaignMail;
use App\Models\ScheduleEmail;
use App\Models\CampaignEmail;
use App\Models\TemplateBuilder;
use App\Models\Campaign;
use App\Models\User;
use App\Models\EmailService;
use Carbon\Carbon;
use Mail;
use Validator;
use MultiMail;
use Swift_SmtpTransport;
use Swift_Mailer;
use Log;

class SendEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will manage schedule emails';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $schedules = ScheduleEmail::where(function($q) {
            $q->where('status', '=', ScheduleEmail::PENDING);
            $q->where('scheduled_at', '<=', Carbon::now());
        })->get();

        foreach ($schedules as $schedule) {
        	if ($schedule) {
				$schedule->status = ScheduleEmail::SENT;
				$schedule->sended_at = Carbon::now();
				$schedule->save();

                $owner_id = $schedule->owner_id;

                $getUserActiveEmailDetails = EmailService::where('active', 1)
                                                            ->where('owner_id', $owner_id)
                                                            ->select(
                                                                'driver', 
                                                                'host', 
                                                                'port', 
                                                                'username', 
                                                                'password', 
                                                                'encryption', 
                                                                'from', 
                                                                'from_name')
                                                            ->first();

                $campaign_id = $schedule->campaign_id;
                
                $subject = Campaign::where('id', $campaign_id)->first()->name;
                $template_id = Campaign::where('id', $campaign_id)->first()->template_id;

                $campaignEmails = CampaignEmail::where('campaign_id', $campaign_id)
                                            ->with('emails')
                                            ->get();

                $data['page'] = TemplateBuilder::where('id', $template_id)->first();


                // backup mailing configuration
                $backup = Mail::getSwiftMailer();

                // set mailing configuration
                $transport = new Swift_SmtpTransport(
                                            $getUserActiveEmailDetails->host, 
                                            $getUserActiveEmailDetails->port, 
                                            $getUserActiveEmailDetails->encryption
                                        );

                $transport->setUsername($getUserActiveEmailDetails->username);
                $transport->setPassword($getUserActiveEmailDetails->password);

                $maildoll = new Swift_Mailer($transport);

                // set mailtrap mailer
                Mail::setSwiftMailer($maildoll);

                foreach ($campaignEmails as $campaignEmail) {
                    Mail::send('template_builder.template-detail', $data, function($message) use ($subject, $campaignEmail, $getUserActiveEmailDetails) {
                        $message->to($campaignEmail->emails->email)
                                ->setFrom([$getUserActiveEmailDetails->from => $getUserActiveEmailDetails->from_name])
                                ->setSubject($subject);
                    });
                }

                // reset to default configuration
                Mail::setSwiftMailer($backup);

			}
        }

    }
}
