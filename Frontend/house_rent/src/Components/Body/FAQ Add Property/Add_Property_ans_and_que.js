import React from 'react';
import Add_Propertyfaq from '../FAQ Add Property/Add_Propertyfaq';

function Add_Propertyfaqans() {
    return (
        <div className="container">
            <h1 style={{ fontSize: "30px", marginBottom: "3ch", textAlign: "center" }}>Frequently Asked Questions</h1>
            <Add_Propertyfaq
                question="What are the benefits of adding my property"
                answer="By adding your property to the GhorBari website, you’ll be able to rent or sell property online with the help of the biggest property marketplace in Sylhet. Promote your property to thousands of verified property seekers and let GhorBari shoulder the responsibility of finding the right buyer/tenant."
            />
            <Add_Propertyfaq
                question="Do I need to sign any agreements?"
                answer="No, you don’t need to sign an agreement to add your property to the website to rent or sell your flat, land or commercial property. However, you can sign an exclusive agreement with GhorBari to take advantage of GhorBari’s extensive marketing features & facilities."
            />
            <Add_Propertyfaq
                question="What is the process of selling/renting my property?"
                answer="Once you have submitted your request to add a property to the GhorBari website, one of our representatives will contact you for information. After that, an executive will visit your site, take necessary photos/videos and publish your property on the website to attract buyers. You can also sign an agreement with GhorBari to take advantage of GhorBari’s extensive marketing features & facilities."
            />
            <Add_Propertyfaq
                question="How long will it take to find buyers/tenants?"
                answer="As soon as your property is listed on the website, you’ll be able to reach thousands of potential buyers and tenants for your property. And if you decide to sign an exclusive agreement with GhorBari, your property will be directly marketed to property seekers whose requirements match your property."
            />
            <Add_Propertyfaq
                question="Are there any charges?"
                answer="There are no charges to add property on our platform. However, commission may apply based on the agreement signed between you and GhorBari in the event of a sales."
            />
        </div>
    );
}

export default Add_Propertyfaqans;
