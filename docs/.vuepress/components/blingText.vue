<template>
  <div class="bling-text-demo">
    <span>sadasd</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {}
};
</script>
<style>
@keyframes home-slidein {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  10% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes home-shine {
  0% {
    background-position: -200px;
  }
  100% {
    background-position: 200px;
  }
}
.bling-text-demo{
  padding:10px;
  border-radius:4px;
  background-color:#26262A;
}
.bling-text-demo span{
  color: #626266;
  background-repeat: no-repeat;
  background-size: 200px;
  -webkit-background-clip: text;
  background-image: linear-gradient(
    -40deg,
    transparent 0%,
    transparent 40%,
    #ffffff 50%,
    transparent 60%,
    transparent 100%
  );
  animation: home-slidein 1.1s ease, home-shine 2s ease 0s infinite;
}
</style>