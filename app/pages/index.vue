<template>
    <div class="flex flex-1 items-center justify-center">
        <div class="text-center">
            <h1 class="text-4xl font-bold mb-4">Find Your Dream Job</h1>
            <p class="text-lg text-gray-600 mb-6">Generate your career path with our comprehensive job listings and resources.</p>
            <div class="space-x-4">
                <nuxt-link to="/jobs" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Jobs</nuxt-link>
                <nuxt-link to="/post-job" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Post a Job</nuxt-link>
            </div>
        </div>
    </div>
</template>