<script setup lang="ts">
useHead({
    title: 'About',
    meta: [
        {
            name: 'description',
            content: 'Learn about the Gritty Culture Blog, a personal project by Casey Moth dedicated to exploring the fuzz, fragments, and found moments in music, film, and visual culture. Discover the story behind the blog and how to get in touch.',
        },
    ],
});
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

</script>
<template>
    <HeaderSection title="About" />

    <section>
        <swiper :slides-per-view="3" :space-between="36">
            <swiper-slide class="self-center">
                <img src="~/assets/img/about/img-polaroid.png" alt="" />
            </swiper-slide>
            <swiper-slide class="self-center">
                <img src="~/assets/img/about/img-paperscrap.png" alt="" />
            </swiper-slide>
            <swiper-slide class="self-center">
                <img src="~/assets/img/about/img-vinyl.png" alt="" />
            </swiper-slide>
            <swiper-slide class="self-center">
                <img src="~/assets/img/about/img-VHStape.png" alt="" />
            </swiper-slide>
            <swiper-slide class="self-center">
                <img src="~/assets/img/about/img-telegram.png" alt="" />
            </swiper-slide>
            <swiper-slide class="self-center">
                <img src="~/assets/img/about/img-casette.png" alt="" />
            </swiper-slide>
            <swiper-slide class="self-center">
                <img src="~/assets/img/about/img-postcard.png" alt="" />
            </swiper-slide>
            <swiper-slide class="self-center">
                <img src="~/assets/img/about/img-floppydisk.png" alt="" />
            </swiper-slide>
        </swiper>
    </section>

    <section class="mt-[115px]">
        <div class="layout">
            <div class="px-10 text-xl font-semibold flex flex-col md:flex-row gap-10">
                <p class="flex-shrink-0 w-auto md:w-[200px]">Why this exists</p>
                <p class="tracking-tight">Grain Archive is a running record of the fuzz, fragments, and found moments in
                    music, film, and visual
                    culture. From washed-out shoegaze to sun-faded celluloid, we document the tones that don’t always
                    get
                    clean airtime. Not everything needs to be polished to mean something. Independently run by me, Casey
                    Moth, and updated at the mercy of mood, memory, and whatever’s looping at 3am.</p>
            </div>
        </div>
    </section>

    <section>
        <div class="layout">
            <div
                class="pt-[64px] md:py-[120px] text-xl font-semibold flex flex-col items-center md:flex-row gap-[64px] md:gap-[10px]">
                <figure>
                    <picture>
                        <source media="(max-width:799px)" srcset="~/assets/img/about/sp/img-contact.jpg">
                        <source media="(max-width:1279px)" srcset="~/assets/img/about/tb/img-contact.jpg">
                        <img src="~/assets/img/about/img-contact.jpg" class=" object-cover h-auto"
                            alt="Portrait of the blog owner with face partially distorted through two clear glasses of water on a white table">
                    </picture>
                </figure>
                <div class="text-xl/[140%] px-10 md:px-[74px] lg:px-[114px] pb-20 md:pb-0 tracking-tight">
                    <h2 class="font-tiltWarp font-normal">Contact</h2>
                    <p class="font-semibold mt-6">Got a dusty VHS, a lost record, or a film no one talks
                        about?<br><br>Send
                        recs, love letters, or questions to <span class="underline">mail@grainarchive.com.</span></p>
                </div>
            </div>
        </div>
    </section>
</template>
