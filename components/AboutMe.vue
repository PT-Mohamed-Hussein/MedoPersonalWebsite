<script setup>

    const charIndex = ref(0)
    const typeValue = ref("")
    const typeStatus = ref(false)
    const typingSpeed = ref(50)
    const erasingSpeed = ref(100)
    const newTextDelay = ref(2000)
    const displayTextArrayIndex = ref(0)


    const displayTextArray = ref([
        "My name is Dr. Mohamed Osama. I am a Physical therapist Specialist in treating Sports Injury. \n \n My goal is to develop a trusting a relationship while focusing on treating the source of the pain. \n \n Treatments prioritize regaining full mobility, strength and confidence to reduce the likelihood of suffering another injury. \n \n I want to ensure my athlete return to peak performance at 100% both physically and mentally when return to play again."
    ])


    const typeText = () => {
    if (charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value += displayTextArray.value[displayTextArrayIndex.value].charAt(
            charIndex.value
        );
        charIndex.value += 1;
        setTimeout(typeText, typingSpeed.value);
    } else {
        typeStatus.value = false;
        }
    }

    onMounted(() => {
        setTimeout(typeText, newTextDelay.value + 200);

    })


</script>

<template>
    <div class="md:p-8 bg-primary-2">
        <h1 class="m-auto tracking-wide mb-6 font-bold font-header text-secondary-mint text-2xl border-b w-fit text-center">Meet Dr. Mohamed Osama</h1>
        <div class=" m-auto text-primary-1 flex items-center justify-center md:flex-row flex-col md:p-8 p-4 max-w-[1000px] gap-8">

            <img src="@/assets/imgs/personalimg.png" alt="doctor-img" class="object-cover h-[300px] relative "/>

            <div class="max-w-2/3 capitalize text-xl tracking-wide flex gap-2">

                <p class="type-effect relative">{{ typeValue }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .type-effect{
        white-space: pre-line;
    }
    .type-effect::after{
        content: '';
        bottom: 0;
        background: white;
        height: 25px;
        width: 4px;
        margin-left: 2;
        position: absolute;
        -webkit-animation: 1s blink step-end infinite;
        -moz-animation: 1s blink step-end infinite;
        -ms-animation: 1s blink step-end infinite;
        -o-animation: 1s blink step-end infinite;
        animation: 1s blink step-end infinite;
    }
    
    img {
        background:
            linear-gradient(to right, white 4px, transparent 4px) 0 0,
            linear-gradient(to right, white 4px, transparent 4px) 0 100%,
            linear-gradient(to left, white 4px, transparent 4px) 100% 0,
            linear-gradient(to left, white 4px, transparent 4px) 100% 100%,
            linear-gradient(to bottom, white 4px, transparent 4px) 0 0,
            linear-gradient(to bottom, white 4px, transparent 4px) 100% 0,
            linear-gradient(to top, white 4px, transparent 4px) 0 100%,
            linear-gradient(to top, white 4px, transparent 4px) 100% 100%;

        background-repeat: no-repeat;
        background-size: 20px 20px;
    }


    @keyframes blink {
        from,
        to {
            background-color: transparent;
        }
        50% {
            background-color: #fff;
        }
    }
    @-moz-keyframes blink {
        from,
        to {
            background-color: transparent;
        }
        50% {
            background-color: #fff;
        }
    }
    @-webkit-keyframes blink {
        from,
        to {
            background-color: transparent;
        }
        50% {
            background-color: #fff;
        }
    }
    @-ms-keyframes blink {
        from,
        to {
            background-color: transparent;
        }
        50% {
            background-color: #fff;
        }
    }
    @-o-keyframes blink {
        from,
        to {
            background-color: transparent;
        }
        50% {
            background-color: #fff;
        }
    }
</style>