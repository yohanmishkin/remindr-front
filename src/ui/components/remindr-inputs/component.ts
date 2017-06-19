import Component from '@glimmer/component';

export default class RemindrInputs extends Component {
  scheduleRemindr() {
    console.log('schedule');
    // validate
    // stripe checkout
    //    AWS $0.07
      //    Polly processing $0.05
      //      4k character limit 
      //    S3 mp3 upload $0.01
      //      10MB limit
      //    Lambda costs $0.01
    //    Twilio
      //      Phone number $0.01
      //      To make call $0.065
    //    $0.145

    //    Stripe $0.30
    //    $0.445
    //    Stripe 2.9%
    //    $0.457905
    //    +$.542095

    //    PayPal $0.05
    //    $0.195
    //    PayPal 5.0%
    //    $0.20475
    //    +$0.79525


    //    Phone number $1 / month

    // success
    //  post /charge
    //    post remindr to API Gateway
    // error
    //  show user error
  }
};
