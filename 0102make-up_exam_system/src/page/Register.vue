<script setup>
import Subject from "../components/Subject.vue";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
const router = useRouter();

const btnLogOut = async () => {
  try {
    await signOut(auth);
    alert("成功登出！");
    router.push("/");
  } catch (error) {
    console.error("登出時發生了一點錯誤TT", error);
  }
};
</script>
<template>
  <div class="absolute z-10 right-28 top-20">
    <button
      @click="btnLogOut"
      class="bg-white text-black border border-black px-4 py-2 rounded-full font-bold text-xl"
    >
      登出
    </button>
  </div>

  <div class="flex justify-center items-center w-screen h-screen bg-[#FBFAF8]">
    <div class="border border-[#3C414E] p-20 w-11/12 h-11/12 rounded-md">
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center">
          <div class="p-3"></div>
          <span class="text-[#3C414E] lg:font-bold lg:text-6xl"
            >31116 楊沁璇</span
          >
          <div class="p-1"></div>
          <span class="text-[#3C414E] lg:font-bold lg:text-3xl lg:pt-5"
            >補考考科登記</span
          >
        </div>

        <div class="p-12"></div>
        <div class="grid justify-center items-center lg:grid-cols-2 lg:gap-3">
          <Subject ref="subjectComponent" />
        </div>
        <div class="p-1"></div>
      </div>
    </div>
  </div>
</template>
