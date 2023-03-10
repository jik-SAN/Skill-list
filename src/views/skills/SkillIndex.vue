<template>
<div class="mt-12">
	<div class="flex justify-end p-2 m-2">
		<RouterLink :to="{name: 'SkillCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">New Skill</RouterLink>
	</div>
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Slug
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="skill in skills" :key="skill.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ skill.name }}
                </th>
                <td class="px-6 py-4">
                    {{ skill.slug }}
                </td>
                <td class="px-6 py-4 space-x-4">
                    <RouterLink :to="{name: 'SkillEdit', params: {id: skill.id}}" class="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded">Edit</RouterLink>
                    <button @click="destroySkill(skill.id)" class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
</template>
<script setup>
import { useSkills } from '@/use/skills'
import { onMounted } from 'vue'

const { skills, getSkills, destroySkill } = useSkills()

onMounted(() => getSkills())

</script>