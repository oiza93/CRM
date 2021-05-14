import {addNewContact,
        getContact,
        getContactWithID,
        updateContact,
        deleteContact

} from '../controllers/crmController';

const routes =(app) =>{

    app.route('/contact')
        .get((req,res,next)=>{
            //middleware
            console.log(`Request from :${req.originalUrl}`)
            console.log(`Request type :${req.method}`)
            next();
        }, getContact)
        
        //post a new contact
        .post(addNewContact);
    
    app.route('/contact/:contactID')
        //get specific contact
        .get(getContactWithID)

        //updating a specific contact
        .put(updateContact)

        //deleting a specific contact
        .delete(deleteContact);
    
}
export default routes;