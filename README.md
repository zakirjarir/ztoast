# ztoast

A Capacitor native Toast plugin for mobile apps (Android & iOS).  
Easily show native toasts from your Ionic Vue / Capacitor app.

## Installation

```bash
npm install zakirjarir/ztoast
npx cap sync


<script setup lang="ts">
import { onMounted } from 'vue';
import { ZToast } from 'ztoast';

onMounted(async () => {
  // Show a simple toast
  await ZToast.show({ 
    message: 'Hello Jarir!', 
    duration: 2000 // milliseconds
  });
});
</script>
