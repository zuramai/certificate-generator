<template>
    <div class="navbar">
        <div class="container mx-auto">
            <div class="flex justify-between items-center  py-5">
                <div class="navbar-brand">
                    <h1 class='text-2xl font-bold'>Certificatex</h1>
                </div>
                <div class="menu">
                    <ul class='navbar-nav flex'>
                        <li class='nav-item px-5'>
                            <nuxt-link to="/" class='nav-link text-gray-800 text-lg'>Home</nuxt-link>
                        </li>
                        <li class='nav-item px-5'>
                            <nuxt-link to="/" class='nav-link text-gray-800 text-lg'>Fitur</nuxt-link>
                        </li>
                        <li class='nav-item px-5'>
                            <nuxt-link to="/" class='nav-link text-gray-800 text-lg'>Kontak Kami</nuxt-link>
                        </li>
                        <li class='nav-item px-5'>
                            <nuxt-link :to="{name: 'creator'}" class='nav-link text-gray-800 text-lg'>Creator Studio</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>