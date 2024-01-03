<template>
  <div
    v-for="(student, index) in fakeData.students"
    :key="student.id"
    class="bg-white border-[#3C414E] border rounded-md mb-2 mx-6"
  >
    <div class="flex py-3 px-5 gap-20 lg:gap-36 justify-center items-center">
      <span class="text-[#3C414E] font-bold text-3xl lg:text-3xl">{{
        student.subject_name
      }}</span>
      <button
        @click="toggleButton"
        class="py-2 px-4 rounded-full text-xl font-semibold"
        :class="{
          'bg-[#3C414E] text-white border border-white': !isButtonClicked,
          'bg-white text-[#3C414E] border border-[#3C414E]': isButtonClicked,
        }"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, watchEffect, onMounted } from "vue";

import Json from "../mark/fake_subjet.json";

const fakeData = ref([]);
onMounted(async () => {
  try {
    // const response = await axios.get("../mark/data.json");
    // fakeData.value = response.data;
    // Json.students.forEach((student) => (student.status = "尚未填寫")); // 設定預設值
    fakeData.value = Json;
    console.log("Data loaded successfully:", fakeData.value.students);
  } catch (error) {
    console.error("Error loading JSON data", error);
  }
});

const isButtonClicked = ref(false);

const toggleButton = () => {
  isButtonClicked.value = !isButtonClicked.value;
  logStatus();
};

const buttonText = ref("登記");

watchEffect(() => {
  buttonText.value = isButtonClicked.value ? "取消" : "登記";
});

const logStatus = () => {
  console.log(`Button Status: ${isButtonClicked.value ? "submit" : "cancel"}`);
};
</script>
