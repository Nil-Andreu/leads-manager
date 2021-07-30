# Lead manager
This app is going to be used to handle leads of different users.
We are going to use Bootstrap for the stylesheets.

In this README file, you will learn the steps that it took to build it:

## 1. Django Rest Framework
Install django-rest-framework and django-rest-knox (which the last one is used for the auth).
Inside of the requirements.txt you are going to see which are the dependencies. To insall them, pip install requirements.txt.

Serializers allow complex data such as querysets and model instanced to be converted to native Python datatypes that can be then easily rendered into JSON..

Serializers also provide deseralization, allowing parsed data to be ocnverted back into complex types.

## 2. Serializer 
Create a serializer to take the model of leads, the queryset and to convert it to JSON. We will do it with a class of serializer.

This way we turn our lead model into a serializer.

## 3. Creating an API 
Once created the serializer, we need to create the API. We are going to do it inside of the api.py.

We create a viewset, which allows us to create a full CRUD API (Create, Read, Update and Delete) without having to specify specific methods for the functionalities.

We do not have to even create our routes. We can use the default route, which register the endpoint and then we can make the requests to this endpoint.

## 4. Creating URLs 
Create the urls inside of the leadsmanager project, which will include the file of the leads app.

Inside of the leads app urls, we are not going to create explicitly urls, as we are going to use the router from rest_framework.

In the urlpatterns of leads url file, we are gonig ot set that will be equal to the router.urls, which gives us the urls registered for the endpoint o fapi/leads.

## 5. REST API
We can now test the API with Postman. We run first the server, and then go to Postman to: http://localhost:8000/api/leads/. 

We can do a post request to this url. For the header we are going to add a Content-Type. And the value is application/json. And then for the body we can write:
    {
        "name":"juan",
        "email":"juan@gmail.com",
        "message":"Contactame"
    }

And what we will obtain is:
    {
        "id": 1,
        "name": "juan",
        "email": "juan@gmail.com",
        "message": "Contactame",
        "created_at": "2021-07-03T20:39:43.155856Z"
    }
We sohuld obtain a status of 201, which is a succees status.
We could create another one.

If we now put in the url http://localhost:8000/api/leads/1/, and a GET request, we are going to obtain the information we just have uploaded.

We can do the different request as it is a full API CRUD.

6. ## React implementation
Now it is time to implement React.
First, we will create a django application, and build some folders: static, src and templates (we can do this with mkdir in the terminal).
Then, we are going to init the environment for React: npm init -y.

Then, we are going to open the package.json in an integrated terminal, and install the Webpack: npm i webpack webpack-cli --save-dev.

We configure inside of package json the scripts for dev and build (one for development and the other for production).

Now it is time to install babel, which is the transpiler: npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev.

Next, pull in React dependencies: npm i react react-dom --save-dev.

Then, we have to configure babel with the file of .babelrc.

Finally, we configure webpack inside of webpack.config.js.

## 7. Preparing front-end views
Go to views.py of the frontend app, and create the view with python and inside of template create the React basic structure (index.html).

Moreover, you can include the urls inside of urls.py.

Remember to register this app inside of the settings and include those urls on leadmanager.

## 8. Creating React front-end
Now, we are going to create the index.js inside of src as well as the App.js inside of components folder (which will contain our react application).

So we will create the default structure that will enable us React.

Having done this, we are going to run npm run dev (being in the frontend folder). And we will see that it is created a main.js file inside of static. Which is the compiled JS, which is the JS that is being imported in the HTML.

Take into consideration taht in package.json, if we put in the dev script --watch, we will not have to hard reload every time we have changed something, it will recompile automatically.

## 9. Adding components
We will add some basic components that we will use for this lead manager app. Specifically, we will build:
- Header (inside of layout folder)
- Dashboard (which will contain the following two)
- Leads (a list of the different lists)
- Form (form to put new leads)

Those components will have Boostrap as styling, as this is only a project for practical example (so we are not focusing on styles)

## 10. Install Redux
We are going to use Redux, as we need a single source of truth. As we are going ot have leads and authentication, so we need some form to save our state of the application.

We can install Redux DevTools for Chrome, so we can see a clear image of how the state of the Redux is.

So we go ot our terminal, and put: npm install redux react-redux redux-thunk redux-devtools-extension

Where redux-thunk will allow us to make asynchrnous requests.

## 11. Implementing Redux: store.js

One of the first thinks when implementing Redux, is to start with the store.

We are going to create a filde inside of the src folder, which will be called store.js.

There we are going to do the necessary imports:
- createStore: necessary for creating the actual store of Redux.
- applyMiddleware: as we are using thunk
- composeWithDevTools
- thunk
- rootReducer: which will look for a file called index.js inside of the folder reducers

Then, we put the initial state of our app, which will be just an empty object.
Also gonna createa variable which will contian any middleware we will use.
Moreover, we will have to create the actual store, which will be equal to createStore() imported. This will take;
- rootReducer
- the initial state we have created above
- and any middleware we want to use, as we are using devtools extension we are going to put composeWithDevTools. The middleware we want to apply is everyone we have inside of middleware array, so we use the spread operator.

And finally, export the store so we can import it in the app.

## 12. Implementing Redux: reducers
We are now going to create the rootReducer.
For this, we create the folder reducers inside of the src folder, and create a new file called index.js.

Reducers is just a meeting place for all the other reducers. So we are going to have a leads reducers, which handles the state that has to do with leads.

We are going to have an auth reducer, which handles authentication.

Also an error reducer to handle the errors.

So we are going to import combineReducers, which will have all the reducers that we will have.

Inside of the App.js, we are going to bring in a couple of things:
- store: 
- provider: which will make it possible to use Redux with React.

We use this Provider as a tag inside of the App.js, which will take as a prop the store.

When we call an action that changes the state, it will be shown in the Diff part of the Redux DevTools.

We will work in the index.js of reducers, and for the moment we will lead with the leads. So we import the leads and put them inside of combineReducers as an object. This reducer is one that we are going to create also.

A reducer what makes is to evaluate an action, and then it sends down a certain state depending on this action. In the case of the lead, we are going to have different actions:
- Get lead
- Delete lead
- ...

For those actions, we are going to create a folder inside of src. nd the way we define leads is with something called types, which we import in the file of leads.js. 

Those types are constants that pulls an instring. 

Then once imported, we create the initial state. In our case, all we want is an empty array.

Then we create a function, which is going to take two things:
- state, which is going to be set to the default one
- action, which is the leads action file where we fire off actions and we can dispatch action to the reducer (to get_lead, add_lead, ...).

Next, we need to create a leads actions file inside of actions. Any actions we want to fire off are going to be here. This is where i will make the HTTP requests with axios (npm install axios).

This leads action for getting is going to be called inside of leads list component. So we go to Leads.js. In order to work with Redux in any component, you need to use something called connect (which is part of react-redux package). 

So the flow of this is:
a. We call get_leads action 
b. Leads come down from the reducer to the component as a prop

So we need to get the state, and then be able to call the get lead method. This is done inside of mapState of Leads.js.

Inside of Lead.js we have the explanatino of how it is working.

## 13. Delete leads
For deleting the leads, we have to follow the before steps.

We need to create a delete action, we go inside of the action sfolders of leads.js, and write the code for the deletion (check that now with axios we are going to delete, no to get). Also, go inside of types.js and write the delete type action.

This DELETE_LEAD action is going to be dispatched to the reducer. So we go inside of the leads reducer, and add a case for DELETE_LEAD.

Then, we have to call this action in some point. So we go to the component of leads, and add the function to it (in the onclick, we need to pass the id, for this we use the .bind, which has the this as first parameter and as second whathever we want to pass). Remember that the function should be added to the connect, so we have access to it.

## 14. Add Leads
Now we are going to add the leads form. So we go inside of the form component.

Then we go to the actions, and create a new type. In the action of add Lead, is going to be a post request to the api/leads, where we have to pass the lead.

Then go to the reducer, and create the new case.

Finally, we have to add this add lead action to the form component. We need to configure:
- connect
- PropTypes
- onChange
- onSubmit

So we can see the pattern of:
* First, create the type and the action (which is the query)
* Second, create the reducer that will handle the change of state
* Use the component to trigger the action on an event

## 15. Error handling
If we now for example put an email that is already in the database, it will have a 400 (bad request). So we need to handle those errors.

The way we are going to do that is with a error reducer, where we are going to store those errors in the state.

We will have a component that is catching those errors and display them to us. For this, we will use a third party package called react-alert. This is a component that will pop-up the error. For doing this:
- npm install --save react-alert react-alert-template-basic react-transition-group
- We will have a provider, the alert provider, which will wrap around everything. And for any component we want to use it, we just wrap the default export with this withAlert(Component).
So we go to the App.js, where we need to include our alert provider.