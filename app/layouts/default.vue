<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const route = useRoute();
const isTopPage = computed(() => route.path === "/");
let tl;

function onLoadAnim() {
  tl.from("main", {
    opacity: 0,
    delay: 0.1,
  }).from(
    "#header",
    {
      opacity: 0,
    },
    ">0.4",
  );
}

onMounted(() => {
  tl = gsap.timeline({
    duration: 0.6,
    ease: "none",
  });

  gsap.fromTo(
    "#logo",
    { rotation: 0 },
    {
      rotation: 180,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        scrub: true,
        start: "top top",
        end: "bottom bottom",
      },
    },
  );
  onLoadAnim();
});

watch(
  () => route.path,
  async () => {
    await nextTick();
    tl?.kill();
    tl = gsap.timeline({ duration: 0.6, ease: "none" });

    onLoadAnim();
    ScrollTrigger.refresh();
  },
);
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-[9999] bg-[url('~/assets/img/bg-noise.png')] bg-repeat bg-[length:100%_100px] mix-blend-difference opacity-50"
    aria-hidden="true" />

  <Marquee marquee-text="Independent writing on music, film, and visual culture—one deep cut at a time."
    :class="isTopPage ? 'block' : 'hidden'" />
  <Header id="header" />

  <main :class="isTopPage ? 'mt-[-84px]' : 'mt-0'">
    <slot />
  </main>

  <Subscribe />
  <Footer />
</template>
