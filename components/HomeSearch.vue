<template>

    <div ref="target" class="relative my-10">
        <form @submit.prevent="handleSubmit"
            class="w-full border-solid border-2 border-templateprimary-600 p-3 flex rounded-xl gap-3">
            <!-- <UButtonGroup size="xl" orientation="horizontal" class="w-full relative "
                :class="{ 'focused': isInputFocused }">
                <UInput v-model="inputValue" size="sm" color="white" placeholder="Хайх..." @input="handleInput"
                    class="w-full " variant="outline" input-class="dark:focus:ring-none custom-button-group"
                    @keypress.enter="handleSubmit" @click="handleInputClick" @onchange="handleChange" autofocus
                    :onFocus="moveCaretAtEnd" @focus="isInputFocused = true" @blur="isInputFocused = false" />
                <UButton icon="i-heroicons-magnifying-glass-20-solid" class="px-5" />
            </UButtonGroup> -->

            <input v-model="inputValue" type="text" class="w-full h-14 focus:outline-none px-5 bg-transparent "
                placeholder="" autofocus pattern="^[а-яА-ЯөӨёЁүҮ ]*$" @input="handleInput"
                @click="handleInputClick" oninvalid="setCustomValidity('Зөвхөн криллээр хайлт өгнө үү')"
                @onchange="handleChange" @focus="isInputFocused = true" @blur="isInputFocused = false">

            <UButton size="sm" icon="i-heroicons-magnifying-glass-20-solid" :trailing="true" class="px-5" type="submit">Хайх
            </UButton>
        </form>


        <div v-show="open" class="modal transition-opacity absolute bg-white text-black rounded py-2 px-5 w-full 
        drop-shadow-xl">
            <div class="modal-content">
                <ul class="  ">
                    <li v-for="(item, i) in items" :key="item.Word">
                        <ULink :to="`/dictionary/${item.Word}`" @click="handleLinkClick(item.Word)">
                            <div class="w-full hover:bg-gray-500 p-1 rounded"  :class="{ active: activeIndex === i }">
                                <strong>{{ getName(item.Word)[0] }}</strong><span>{{ getName(item.Word)[1] }}</span>
                            </div>
                        </ULink>

                    </li>
                </ul>
           
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const route = useRoute()
var open = ref(false)
var inputValue = ref('')
var items = ref<IResponseWords[]>([])
const target = ref(null)
const isInputFocused = ref(false);
var activeIndex = ref(0)

const handleSubmit = () => {
    open.value = false
    inputValue.value = inputValue.value.trim()
    if (inputValue.value) {
        navigateTo(`/dictionary/${inputValue.value}`)
    }
};


const handleChange = (e: any) => {
    console.log(e.target.value)
}

const handleInputClick = () => {
    if (items.value.length > 0) {

        open.value = true
    }
}


const handleLinkClick = (name: any) => {
    open.value = false
    inputValue.value = name
}



onClickOutside(target, event => open.value = false)


if (route.params.word) {
    inputValue.value = route.params.word.toString();

}
const handleInput = async (event: any) => {

    const input = event.target;
    const value = input.value;

    if (!value.match(/^[а-яА-ЯөӨёЁүҮ ]*$/)) {
        input.setCustomValidity('Зөвхөн криллээр хайлт өгнө үү')
        return
    } else {
        input.setCustomValidity('')
    }

    if (value.length > 1) {

        const response = await useCustomFetch(`/suggestions?term=${value}`, "GET") as any;

        if (response?.value) {
            items.value = response.value

        }
    } else {
        items.value = []
    }

    if (items.value.length > 0) {
        open.value = true
    } else {
        open.value = false
    }
}

const getName = (word: string): string[] => {
    const index = word!.toLowerCase().indexOf(inputValue.value!.toLowerCase());
    var sub1 = ""
    var sub2 = ""
    if (index !== -1) {
        sub1 = word!.slice(index, index + inputValue.value!.length);
        sub2 = word!.slice(index + inputValue.value!.length)
    } else {
        sub1 = ""
        sub2 = word!
    }
    return [sub1, sub2]
}

const moveCaretAtEnd = (e: any) => {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
}

function    moveDown() {
      if (activeIndex === null || activeIndex.value >= items.value.length - 1) {
        activeIndex.value = 0;
      } else {
        activeIndex.value++;
      }
      inputValue.value =  items.value[activeIndex.value].Word;

    }

    function moveUp() {
      if (activeIndex === null || activeIndex.value <= 0) {
        activeIndex.value = items.value.length - 1;
      } else {
        activeIndex.value--;
      }

      inputValue.value =  items.value[activeIndex.value].Word;
    }
function handleKeydown(event:any) {
      if (event.key === 'ArrowDown') {
        moveDown();
      } else if (event.key === 'ArrowUp') {
        moveUp();
      } 
    }

onMounted(() => {
      window.addEventListener('keydown', handleKeydown);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleKeydown);
    });



</script>
<style scoped>
/* .custom-input {
    border-radius: 0;
} */

.focused {
    outline: 2px solid #d56222;
}
.active{
    background-color: rgb(243 244 246);
}
</style>