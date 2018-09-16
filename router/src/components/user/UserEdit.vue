<template>
    <div>
        <h3>Edit the User {{$route.params.id}}</h3>
        <p>Locale: {{$route.query.locale}}</p>
        <p>Count: {{$route.query.cnt}}</p>
        <div style="height: 800px"></div>
        <router-link id="scrollExample" tag="button" class="btn btn-primary" :to="{name:'home'}">Take me home</router-link>
    </div>
</template>