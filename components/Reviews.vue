<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';

    import 'swiper/css';

    import 'swiper/css/free-mode';
    import 'swiper/css/pagination';


    import { FreeMode } from 'swiper';

    const modules = ref([FreeMode])

</script>
<template>
    <div class="p-8 bg-primary-3">
        <h2 class="m-auto tracking-wide mb-6 font-bold font-header text-secondary-mint text-2xl border-b w-fit">
            Patients Reviews
        </h2>
        <div class=" container m-auto flex justify-around items-center gap-8">
            <swiper
                :slidesPerView="1"
                :spaceBetween="30"
                :breakpoints="{
                    '640': {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    '768': {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    '1024': {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }"
                :freeMode="true"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for=" i in 3" :key="i" class="rounded-md">
                    <div class="flex gap-4 flex-col bg-primary-1 text-secondary-main p-4 rounded relative">
                
                        <div class="relative flex items-center gap-4">
                            <img src="https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-t-shirt-white-background-147541161.jpg" alt="person-img" class="w-[50px] h-[50px] rounded-full shadow-lg" />
                            <h3 class="text-secondary-hover text-lg font-body font-bold">
                                John Doe
                            </h3>
                            <img src="@/quotes.png" alt="qoutes" class="absolute -bottom-8 w-[50px] h-[50px] right-0 rotate-45"/>
                        </div>
                        <hr />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In exercitationem magni iusto, quasi inventore tempora quod eligendi eius eum culpa.</p>
                    </div>
                </swiper-slide>
            </swiper>

            
        </div>
    </div>
</template>


<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>