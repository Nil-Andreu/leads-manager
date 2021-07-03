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

