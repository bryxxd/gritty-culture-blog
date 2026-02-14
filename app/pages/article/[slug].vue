<script setup lang="ts">
const marqueeText = "End of reel   ·  Fin  ·  "

</script>
<template>
    <div class="layout">
        <HeaderSection custom-class="text-[clamp(40px,10vw,110px)]/[95%] p-[89px_0_24px] md:pt-[118px]"
            title="Listening to Films That Drift" />
        <p
            class="text-center font-instrumentSerif italic text-[clamp(40px,8vw,80px)] flex items-center justify-center gap-6">
            <span>Film</span>
            <span>·</span>
            <span>August 21, 2028</span>
        </p>
        <figure>
            <img src="~/assets/img/article-dummy.jpg"
                class="w-full rounded-lg mt-[110px] object-cover md:mt-[170px] h-[320px] md:h-[600px] lg:h-[700px]"
                alt="" />
        </figure>
    </div>

    <section class="layout">
        <div class="py-[74px] md:py-[130px] px-10 text-xl font-semibold flex flex-col md:flex-row gap-10">
            <p class="flex-shrink-0 w-auto md:w-[200px]">Why this exists</p>
            <p class="tracking-tight">
                Grain Archive is a running record of the fuzz, fragments, and found
                moments in music, film, and visual culture. From washed-out shoegaze to
                sun-faded celluloid, we document the tones that don’t always get clean
                airtime. Not everything needs to be polished to mean something.
                Independently run by me, Casey Moth, and updated at the mercy of mood,
                memory, and whatever’s looping at 3am.
            </p>
        </div>
    </section>

    <section class="layout text-paragraph-2">
        <div class="bg-background-3 rounded-lg">
            <div class="md:max-w-[600px] mx-auto py-[64px] md:py-[120px] px-5">
                <div class="cms-rich-text">
                    <h2>Time as sensation</h2>
                    <br /><br />
                    <p>
                        In drifting cinema, time stops being a measurement and becomes a
                        texture. Directors like Apichatpong Weerasethakul and Chantal Akerman
                        don’t just depict long takes—they make you live inside them. “Tropical
                        Malady” lingers in the jungle like a memory refusing to fade, while
                        “Jeanne Dielman” turns domestic ritual into existential unease. These
                        films demand patience, not as a barrier, but as a portal.The reward? A
                        heightened sensitivity to sound, shadow, and breath. The smallest
                        gestures—a glance, a pause—carry tectonic weight.
                    </p>
                    <br /><br />
                    <h2>Time as sensation</h2>
                    <br /><br />
                    <p>
                        In drifting cinema, time stops being a measurement and becomes a
                        texture. Directors like Apichatpong Weerasethakul and Chantal Akerman
                        don’t just depict long takes—they make you live inside them. “Tropical
                        Malady” lingers in the jungle like a memory refusing to fade, while
                        “Jeanne Dielman” turns domestic ritual into existential unease. These
                        films demand patience, not as a barrier, but as a portal.The reward? A
                        heightened sensitivity to sound, shadow, and breath. The smallest
                        gestures—a glance, a pause—carry tectonic weight.
                    </p>
                    <br /><br />
                    <h2>Time as sensation</h2>
                    <br /><br />
                    <p>
                        In drifting cinema, time stops being a measurement and becomes a
                        texture. Directors like Apichatpong Weerasethakul and Chantal Akerman
                        don’t just depict long takes—they make you live inside them. “Tropical
                        Malady” lingers in the jungle like a memory refusing to fade, while
                        “Jeanne Dielman” turns domestic ritual into existential unease. These
                        films demand patience, not as a barrier, but as a portal.The reward? A
                        heightened sensitivity to sound, shadow, and breath. The smallest
                        gestures—a glance, a pause—carry tectonic weight.
                    </p>
                    <br /><br />
                    <h2>Time as sensation</h2>
                    <br /><br />
                    <p>
                        In drifting cinema, time stops being a measurement and becomes a
                        texture. Directors like Apichatpong Weerasethakul and Chantal Akerman
                        don’t just depict long takes—they make you live inside them. “Tropical
                        Malady” lingers in the jungle like a memory refusing to fade, while
                        “Jeanne Dielman” turns domestic ritual into existential unease. These
                        films demand patience, not as a barrier, but as a portal.The reward? A
                        heightened sensitivity to sound, shadow, and breath. The smallest
                        gestures—a glance, a pause—carry tectonic weight.
                    </p>
                    <br /><br />
                    <h2>Time as sensation</h2>
                    <br /><br />
                    <p>
                        In drifting cinema, time stops being a measurement and becomes a
                        texture. Directors like Apichatpong Weerasethakul and Chantal Akerman
                        don’t just depict long takes—they make you live inside them. “Tropical
                        Malady” lingers in the jungle like a memory refusing to fade, while
                        “Jeanne Dielman” turns domestic ritual into existential unease. These
                        films demand patience, not as a barrier, but as a portal.The reward? A
                        heightened sensitivity to sound, shadow, and breath. The smallest
                        gestures—a glance, a pause—carry tectonic weight.
                    </p>
                </div>
                <div class="mt-[64px] md:mt-[120px] pt-10 border-t-[1px] border-dashed border-divider-1">
                    <img src="~/assets/img/article/footer-icons.png" class="max-w-[140px] mx-auto" alt="" />
                </div>
            </div>
        </div>
    </section>

    <section class="layout px-10px text-headline-1 mt-[10px]">
        <div class="py-[64px] md:py-[120px] bg-background-2 rounded-lg px-[10px] md:px-10 grid grid-cols-1 lg:grid-cols-[175px_1fr] gap-6">
            <h2 class="text-[clamp(20px,3vw,24px)] font-tiltWarp">More stories</h2>
            <div class="flex flex-col md:flex-row gap-6">
                <NuxtLink to="/" class="font-semibold group" v-for="n in 3">
                    <div class="overflow-hidden">
                        <img src="/img/img-dummy.jpg" alt=""
                            class="w-full h-full object-cover md:group-hover:scale-[1.1] md:group-hover:blur-md transition-blur transition-scale duration-300 ease-out" />
                    </div>
                    <div class="text-lg/[140%] md:text-xl mt-6">
                        <h3>
                            Listening to Films That Drift
                        </h3>
                        <div class="flex gap-1 items-center text-paragraph-3">
                            <p>Design</p>
                            <p>·</p>
                            <p>Aug 21, 2028</p>
                        </div>
                    </div>

                </NuxtLink>
            </div>
        </div>
    </section>

    <Marquee :marquee-text="marqueeText" custom-class="text-[40px] md:text-[64px] lg:text-[80px] py-[64px] md:py-[80px] lg:py-[120px] font-instrumentSerif italic" />
</template>
