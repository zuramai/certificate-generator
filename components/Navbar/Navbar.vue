<template>
    <div class="navbar">
        <div class="container mx-auto">
            <div class="flex justify-between items-center  py-5">
                <div class="navbar-brand">
                    <h1 class='text-2xl font-bold'>
                        <Logo/>
                    </h1>
                </div>
                <div class="menu">
                    <ul class='navbar-nav flex'>
                        <li class='nav-item px-5'>
                            <nuxt-link to="/" class='nav-link text-gray-800 text-lg'>Home</nuxt-link>
                        </li>
                        <li class='nav-item px-5'>
                            <nuxt-link to="/" class='nav-link text-gray-800 text-lg'>Features</nuxt-link>
                        </li>
                        <li class='nav-item px-5'>
                            <nuxt-link to="/" class='nav-link text-gray-800 text-lg'>Tutorial</nuxt-link>
                        </li>
                        <li class='nav-item px-5'>
                            <nuxt-link :to="{name: 'creator'}" class='nav-link nav-link-button border border-white  py-1 px-3 rounded-lg text-gray-800 text-lg'>Creator Studio</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.navbar {
    position: absolute;
    top: 0;
    width: 100%;

    .nav-link {
        color: #eee;
        transition: all .2s;
        position: relative;
        &:not(.nav-link-button):before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 2px;
            height: 1px;
            width: 0;
            transition: all .2s;
            background-color: white;
        }
    }
    .nav-link:hover {
        color: #fff;
        &:before {
            width: 100%;
        }
    }
}
</style>