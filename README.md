# Lead manager
This app is going to be used to handle leads of different users.

In this README file, you will learn the steps that it took to build it:
1. Install django-rest-framework and django-rest-knox (which the last one is used for the auth).
Inside of the requirements.txt you are going to see which are the dependencies. To insall them, pip install requirements.txt.

Serializers allow complex data such as querysets and model instanced to be converted to native Python datatypes that can be then easily rendered into JSON..

Serializers also provide deseralization, allowing parsed data to be ocnverted back into complex types.

2. Create a serializer to take the model of leads, the queryset and to convert it to JSON. We will do it with a class of serializer.

This way we turn our lead model into a serializer.

3. Once created the serializer, we need to create the API. We are going to do it inside of the api.py.

We create a viewset, which allows us to create a full CRUD API (Create, Read, Update and Delete) without having to specify specific methods for the functionalities.

We do not have to even create our routes. We can use the default route, which register the endpoint and then we can make the requests to this endpoint.

4. Create the urls inside of the leadsmanager project, which will include the file of the leads app.

Inside of the leads app urls, we are not going to create explicitly urls, as we are going to use the router from rest_framework.

In the urlpatterns of leads url file, we are gonig ot set that will be equal to the router.urls, which gives us the urls registered for the endpoint o fapi/leads.

5. We can now test the API with Postman. We run first the server, and then go to Postman to: http://localhost:8000/api/leads/. 

We can do a post rqeuest to this url. For the header we are going to add a Content-Type. And the value is application/json. And then for the body we can write:
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

6. Now it is time to implement React.

