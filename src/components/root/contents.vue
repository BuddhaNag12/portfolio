<template>
    <div>
        <loading/>
             <home/>
              <aboutMe/>
                <projects/>
         <contact/>
    </div>
</template>


<script>
export default {
    components:{
            loading:()=>import('@/components/loading'),
            home:()=>import('@/components/home'),
            aboutMe:()=>import('@/components/about'),
            contact:()=>import('@/components/contact'),
            projects:()=>import('@/components/projects'),
    }
}
</script>