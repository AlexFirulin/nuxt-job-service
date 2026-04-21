<template>
        <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-lg">JB</span>
              </div>
              <span class="font-bold text-xl text-gray-900">JobBoard</span>
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/jobs" class="text-gray-700 hover:text-blue-600 transition-colors">
              Find Jobs
            </NuxtLink>
            <NuxtLink to="/companies" class="text-gray-700 hover:text-blue-600 transition-colors">
              Companies
            </NuxtLink>
            <NuxtLink to="/salary-guide" class="text-gray-700 hover:text-blue-600 transition-colors">
              Salary Guide
            </NuxtLink>
            <NuxtLink to="/resources" class="text-gray-700 hover:text-blue-600 transition-colors">
              Resources
            </NuxtLink>
          </div>

          <!-- Right Side Buttons -->
          <div class="flex items-center space-x-4">
            <button class="hidden md:block text-gray-700 hover:text-blue-600 transition-colors">
              Sign In
            </button>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Post a Job
            </button>
            
            <!-- Mobile menu button -->
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink to="/jobs" class="block px-3 py-2 text-gray-700 hover:text-blue-600">
            Find Jobs
          </NuxtLink>
          <NuxtLink to="/companies" class="block px-3 py-2 text-gray-700 hover:text-blue-600">
            Companies
          </NuxtLink>
          <NuxtLink to="/salary-guide" class="block px-3 py-2 text-gray-700 hover:text-blue-600">
            Salary Guide
          </NuxtLink>
          <NuxtLink to="/resources" class="block px-3 py-2 text-gray-700 hover:text-blue-600">
            Resources
          </NuxtLink>
          <button class="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
            Sign In
          </button>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
</script>