module.exports = {
    set_as_instructor: (req, res) => {
        console.log('set_as_instructor fired!!')
        const db = req.app.get('db');
        const { id } = req.body;
        db.set_instructor([id])
        .then((instructor) => {
        //    console.log('=========================',)
            req.session.user[0].instructor = instructor[0].instructor;
            // console.log(req.session.user)
            res.status(200).send(req.session.user)
        })
        .catch(err => console.log('error in set_as_instructor ---', err))
    },
    set_complete: (req, res) => {
        console.log('set complete profile fired!')
        const db = req.app.get('db')
        const { id } = req.body;
        db.set_profile_complete([id])
        .then((profilecomplete) => {
            req.session.user[0].profilecomplete = profilecomplete[0].profilecomplete
            // console.log(req.session.user)
            res.status(200).send(req.session.user)
        })
        .catch((error) => {console.log('error in set_complete', error)})
    },

    create: (req, res) => {
        console.log('Create instructor profile fired!')
        const db = req.app.get('db')
        const {        
            age,	
            gender,     
            locationType,       
            zipcode,    
            address,    
            city,   
            state,      
            country,
            price,    
            instruments,      
            styles,     
            skillLevel,    
            teachingSince,    
            about,    
            education,  
            id, 
        } = req.body;
        console.log('CONTROLLER ~~~~~~~~~~ age -->', age, 'gender -->', gender, 'locationType -->', locationType, 'zipcode -->', zipcode, 'address -->', address, 'city -->', city, 'state -->', state, 'country -->', country,  'price -->', price, 'instrument -->',  instruments, 'styles -->', styles, 'skilllevel -->', skillLevel, 'teachingSince -->', teachingSince, 'about -->', about, 'education -->', education, 'id -->', id);
        db.create_instructor_profile_by_id([age, gender, locationType, zipcode, address, city, state, country, price, instruments, styles, skillLevel, teachingSince, about, education, id])
        .then((instructorProfile) => {
            console.log('CONTROLLER!! instructorProfile', instructorProfile)
            res.status(204).send(instructorProfile)})
        .catch((error) => {console.log('error in create : instructor_profile_profile', error)})
    }
}