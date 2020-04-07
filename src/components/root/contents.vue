<template>
    <div>
              <loading/>
              <scrollup/>
                 <home/>
              <aboutMe/>
            <projects/>
       <exclusive/>
         <contact/>
    </div>
</template>


<script>
export default {
    components:{

            loading:()=>import('@/components/loading'),
            scrollup:()=>import('@/components/scrollup'),
            home:()=>import('@/components/home'),
            aboutMe:()=>import('@/components/about'),
            contact:()=>import('@/components/contact'),
            projects:()=>import('@/components/projects'),
            exclusive:()=>import('@/components/exclusive'),
    }
}
</script>