<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation Bar -->
    <Navigation />

    <!-- Hero Section (Optional - can be conditionally shown) -->
    <slot name="hero" />

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '~/components/layout.vue/Footer.vue';
import Navigation from '~/components/layout.vue/Navigation.vue';

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.router-link-active {
  color: #2563eb;
  font-weight: 500;
}
</style>