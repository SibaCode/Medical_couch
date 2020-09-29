

const patient = {
    register: {
        msg: `Welcome to MedicalCouch
                                    <br/>
                                    <br/>
                                    You have successfully registered with us to make consultation bookings and prescription collections easy for you.
                                    <br/>
                                    <br/>
                                    For any queries please contact us through:
                                    <br/>
                                    Email: health@medicalcouch.co.za
                                    <br/>
                                    Phone: 081 722 3199/ 081 472 4471
    `,
        subject: `Registration`
    }, 
    forgot: {
        msg: `This email is sent in response to you requesting to reset your password 
        <br/> 
        <br/> 
        Please follow <a href="$link">link </a> below to reset your password
        <br/> 
        <br/>
        <a href="$link"> <p>$link</p> </a> 
        <br>
        If you did not request for this action please ignore this email
        <br>
        Note: MeicalCouch will never ask for your login information. Please keep your information safe`,
        subject: 'Forgot Password'
    },
    booking: {
        msg: `You have successfully booked your appointment with Dr $dr for $date at Pleas bring along your ID and Medical Aid for practice verification. 
              <br/>
              <br/>Should you not be able to make it please cancel not later 3 hours prior the appointment`,
        subject: `Booked Succesfully`
    },
    cancel: {
        msg: `This email is sent to you to confirm your cancellation with Dr $dr for $date at $time. 
            <br/>
            <br/>If you did not request this action kindly email us at **@medicalcouch.co.za and we will attend to your matter.
        `,
        subject:`Cancelation`
    }
}


module.exports = { patient }