<template>
    <!-- note that previous usage with ul element and tag=li made active-class behavior very strange, therefore I used this approach -->
    <nav class="nav nav-pills nav-fill">
        <router-link class="nav-item nav-link" to="/" exact active-class="active">
            Home
        </router-link>
        <router-link class="nav-item nav-link" to="/user/1" active-class="active">
            User1
        </router-link>
        <router-link class="nav-item nav-link" to="/user/2" active-class="active">
            User2
        </router-link>
    </nav>
</template>
