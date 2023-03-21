
export default defineEventHandler(async (event)=>{
    
    let query = getQuery(event)

    let webhook = 'https://discord.com/api/webhooks/1087868081499541544/95VHEOx5YSnTUsvaNpJ_q3avvU2SPpGBZT-UKzr-je9UWT2clhypukMVUe1EjDXo6Lnx';

    let FullName = query.fullname 
    if (!FullName){
        return 'Full Name Not Exist'
    }

    let age = query.age;
    if (!age){
        return 'Age Not Exist'
    }

    let phoneno = query.phoneno 
    if (!phoneno){
        return 'Phone Number Not Exist'
    }

    let email = query.email 
    if (!email){
        return 'Email Not Exist'
    }

    let AppointmentType = query.type 
    if (!AppointmentType){
        return 'Appointment Type Not Exist'
    }

    if(AppointmentType == 'Online') {
        webhook = "https://discord.com/api/webhooks/1087868269664423966/DOFUMT-SDEC7e_fB4QzbIYU8QqhnACD-aourHMbGT5HgYFR5lngodC8mWdxC15Ezpib_"
    }

    try{
        const embed = {
            title: 'New Appointment Request Just Recived Of Type `'+AppointmentType+'`',
            description: 'Patient Name: ' + FullName + '\n Patient Age: ' + age + '\n Patient PhoneNo.: ' + phoneno + '\n Patient Email: ' + email,
            color: 1752220, // Hex color code of embed color
            
        };
        
        const resp = await fetch(webhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ embeds: [embed] })
        })


        if(resp.status == 204) {
            return {
                ok: true
            }
        }else{
            return{
                ok: false,
                message: "Error Occured Please contact server developer"
            }
        }
        
        // const msg = await client.messages.create({
        //     body: 'New Appointment Request Just Recived Of Type `'+AppointmentType+'`\n Patient Name: ' + FullName + '\n Patient Age: ' + age + '\n Patient PhoneNo.: ' + phoneno + '\n Patient Email: ' + email,
        //     from: '+15178789069',
        //     // to: '+201060370082'
        //     to: '+201006247185'
        // })

    
    } catch (e){
        return {
            ok: false,
            message: e
        }    
    }
    
})