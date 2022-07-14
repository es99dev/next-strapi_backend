module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'eruiz@impactnetworking.com,kmonk@impactnetworking.com,ajlee@impactnetworking.com',
                from: 'eruiz@impactnetworking.com',
                subject: 'New Contact Form',
                html: `
                    <h1>Contact Information:</h1>
                    <p>Name: ${result.name}</p>
                    <p>Company Name: ${result.companyName}</p>
                    <p>Email: ${result.email}</p>
                    <p>Phone Number: ${result.phoneNumber}</p>
                    <p>Message: ${result.message}</p>
                `,
              });
        } catch (error) {
            console.log(error);
        }
    }
}