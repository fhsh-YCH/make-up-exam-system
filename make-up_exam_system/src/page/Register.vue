<script setup>
import Subject from "../components/Subject.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const router = useRouter();
const userDisplayName = ref("");

const btnLogOut = async () => {
  try {
    await signOut(auth);
    alert("成功登出！");
    router.push("/");
  } catch (error) {
    console.error("登出時發生了一點錯誤TT", error);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    userDisplayName.value = user.displayName;
  }
});
</script>
<template>
  <div class="hidden md:block lg:block">
    <div class="absolute z-10 right-28 top-20">
      <button
        @click="btnLogOut"
        class="bg-white text-black border border-black p-3 rounded-full font-bold text-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
        >
          <path
            d="M23.1352 4.62704H29.3046C30.1227 4.62704 30.9073 4.95203 31.4858 5.53053C32.0643 6.10902 32.3893 6.89362 32.3893 7.71173V29.3046C32.3893 30.1227 32.0643 30.9073 31.4858 31.4858C30.9073 32.0643 30.1227 32.3893 29.3046 32.3893H23.1352"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.3387 10.7964L4.62701 18.5082L12.3387 26.2199"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.62709 18.5082L23.1353 18.5082"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
  <div class="p-2 lg:p-5"></div>
  <div class="flex justify-center items-center w-screen h-full bg-[#FBFAF8]">
    <div
      class="border border-[#3C414E] py-8 px-3 lg:p-20 w-11/12 h-11/12 rounded-md"
    >
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center">
          <div class="p-2 lg:p-3"></div>
          <span class="text-[#3C414E] font-bold text-2xl lg:text-6xl">{{
            userDisplayName
          }}</span>
          <div class="p-1"></div>
          <span class="text-[#3C414E] font-bold lg:text-3xl pt-2 lg:pt-5"
            >補考考科登記</span
          >
        </div>

        <div class="p-3 lg:p-12"></div>
        <div
          class="grid justify-center items-center grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-3"
        >
          <Subject />
        </div>
        <div class="p-1"></div>
      </div>

      <div class="md:hidden lg:hidden">
        <div class="p-1"></div>
        <div class="flex justify-center items-center">
          <button
            @click="btnLogOut"
            class="bg-white text-black border border-black p-2 rounded-full font-bold text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5L21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 7L3 12L8 17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 12L15 12"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
