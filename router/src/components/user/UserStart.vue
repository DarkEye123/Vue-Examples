<template>
    <div>
        <p>Please select a User</p>
        <ul class="list-group">
            <!-- first one is example of hardcoded route -->
            <router-link tag="li" to="user/1" class="list-group-item" style="cursor: pointer">User 1</router-link>
            <router-link tag="li" :to="{name:'userDetail', params:{id:2}}" class="list-group-item " style="cursor: pointer">User 2</router-link>
            <router-link tag="li" :to="{name:'userDetail', params:{id:3}}" class="list-group-item " style="cursor: pointer">User 3</router-link>
        </ul>
    </div>
</template>