<script setup>
    import MazDialog from 'maz-ui/components/MazDialog'
    import MazBtn from 'maz-ui/components/MazBtn'
    import MazInput from 'maz-ui/components/MazInput'
    import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
    import MazInputNumber from 'maz-ui/components/MazInputNumber'

    
    import { installToaster } from 'maz-ui'
    
    
    import { useToast } from 'maz-ui'
    const toasterOptions = {
        position: 'bottom-right',
        timeout: 10_000,
        persistent: false,
    }
    
    const myapp = useNuxtApp ()

    myapp.vueApp.use(installToaster, toasterOptions)
    const { toast } = useToast()

    const isOpen = ref(false)

    const isLoading = ref(false)

    const ReservationType = ref("Online")

    const PatientInfo = reactive({
        fullname: '',
        email: '',
        phoneno: '',
        age: 8
    })

    const SendData = async () => {

        if(PatientInfo.fullname == '' || PatientInfo.email == '' || !PatientInfo.email.includes('@') || PatientInfo.phoneno == '' || PatientInfo.age == 0 ){
            toast.error('Please Fill All Inputs Correctly.', {
                position: 'bottom',
                timeout: 1000,
            })
            return 
        }

        isLoading.value = true
        const resp = await $fetch('/api/sendmessage', {
            params: {
                fullname: PatientInfo.fullname,
                email: PatientInfo.email,
                phoneno: PatientInfo.phoneno,
                age: PatientInfo.age,
                type: ReservationType.value
            }
        })

        if(resp.ok){
            ResetPatientdata()
            isOpen.value = false
            isLoading.value = false

            toast.info('Our Team Will Contact With You Very Soon Please Wait And Dont Spam Any Messages.', {
                position: 'bottom',
            })

        }else{
            isLoading.value = false
            toast.error(resp.message || "Unkown Error Happens Please Contact Developer", {
                position: 'bottom',
                timeout: 1000,
            })

        }

        // setTimeout(() => {
        //     isLoading.value = false
        // }, 2000)
    }

    const ResetPatientdata = () => {
        PatientInfo.fullname = ''
        PatientInfo.email = ''
        PatientInfo.phoneno = ''
        PatientInfo.age = ''
    }

    const openReservationForm = (type) => {
        ReservationType.value = type
        isOpen.value = true
        ResetPatientdata()
    }

</script>

<template>

    <MazDialog v-model="isOpen" :title="`Fill ${ReservationType} Reservation Form`">
    <div class="flex flex-col gap-2">
        <MazInput
            v-model="PatientInfo.fullname"
            label="Full Name"
        />
        <MazInput
            v-model="PatientInfo.email"
            label="Email Address"
        />

        <MazInputNumber
            v-model="PatientInfo.age"
            label="Age"
            :min="8"
            :max="50"
            :step="1"
            size="md"
        />
        <MazPhoneNumberInput
            v-model="PatientInfo.phoneno"
            show-code-on-list
            color="info"
            :preferred-countries="['EG']"
            defaultCountryCode="EG"
            @update="results = $event"
            :success="results?.isValid"
        />
    </div>
    <template #footer="{ close }">
        <MazBtn :loading="isLoading" @click="SendData">
            Send Data
        </MazBtn>
    </template>
    </MazDialog>


    <div class="h-[90dvh] bg-primary-2 flex flex-col md:flex-row gap-3 img">    
        <div class="h-full md:pl-12 md:pr-0 p-4 text-primary-1 text-center bg-gradient-to-r from-secondary-main to-transparent w-full">
            <div class="md:w-1/2 flex flex-col justify-center items-center h-full">

                <p class="font-body text-6xl font-bold">Book <span class=" text-secondary-exec">now</span> your</p>
    
                <p class="font-body text-6xl font-bold"><span class=" text-secondary-exec">free</span> assesment</p>
                <div class="md:w-1/2 mt-14 w-full">
                    <p class=" mb-4">choose "online" if you are outside cairo</p>
                    <div @click="openReservationForm('Clinc')" class="p-4 bg-secondary-mint rounded-full text-secondary-main my-3 flex justify-center items-center font-bold text-xl shadow-lg cursor-pointer hover:bg-secondary-hover transition-all ease-in-out duration-300">
                        Clinic
                    </div>
                    <div @click="openReservationForm('Online')" class="p-4 bg-secondary-mint rounded-full text-secondary-main my-3 flex justify-center items-center font-bold text-xl shadow-lg cursor-pointer hover:bg-secondary-hover transition-all ease-in-out duration-300">
                        Online
                    </div>
    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.img{
    background-image: url('https://wallpapers.com/images/featured/1j6ljd37vjbb0bw2.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

</style>