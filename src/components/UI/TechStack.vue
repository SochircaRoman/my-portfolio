<script>
export default {
    props: {
      skills: {
          type: Array,
          required: true,
      }
  },
  data() {
    return {
      currentSkillType: null,
    }
  },
  methods: {
    selectCurrentSkillType(index) {
      switch (index) {
        case 0:
          this.currentSkillType = 0
          break;
        case 1:
          this.currentSkillType = 1
          break;
        case 2:
          this.currentSkillType = 2
          break;
      }
    },
  }
    
}
</script>

<template>

  <div class="tech">

    <h2 class="tech__title">My Tech Stack</h2>

    <div class="tech__content">
      <div class="tech__content-menu">

        <div 
          class="tech__menu-wrapper noselect"
          v-for="skill in skills"
          :key="skill.id"
        >
          <span class="tech__menu-line"></span>
          <span class="tech__menu-name" @click="selectCurrentSkillType(skill.id)">{{ skill.type }}</span>
        </div>
      </div>
      
      <div class="tech__content-skills" v-if="currentSkillType == 0">
        <span
          class="skill__wrapper noselect"
          v-for="(tech, index) in skills[0].technologies"
          :key="index"
        >
          <span><img class="skill__img" :src="'../../skills/' + tech.image" :alt="tech.title"></span>
        </span>
      </div>

      <div class="tech__content-skills" v-else-if="currentSkillType == 1">
        <span
          class="skill__wrapper noselect"
          v-for="(tech, index) in skills[1].technologies"
          :key="index"
        >
          <span><img class="skill__img" :src="'../../skills/' + tech.image" :alt="tech.title"></span>
        </span>
      </div>

      <div class="tech__content-skills" v-else-if="currentSkillType == 2">
        <span
          class="skill__wrapper noselect"
          v-for="(tech, index) in skills[2].technologies"
          :key="index"
        >
          <span><img class="skill__img" :src="'../../skills/' + tech.image" :alt="tech.title"></span>
        </span>
      </div>

      <div class="tech__content-skills" v-else></div>

    </div>
  </div>

</template>

<style scoped>

.tech{
  margin-bottom: 40px;
}

.tech__title {
  font-weight: 600;
  font-size: 34px;
  line-height: 60px;
  color: #21243D;
  margin-bottom: 20px;
}

.tech__content-menu {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 20px;
}

.tech__menu-wrapper:hover {
  cursor: pointer;
  transition: 0.2s all;
  background:#b7b3b3;
  border-left: 5px solid #21243D;
}

.tech__menu-line {
  border-left: 1px solid #000000;
  position: absolute;
  height: 60px;
}

.tech__menu-name {
  font-weight: 500;
  font-size: 24px;
  line-height: 60px;
  color: #21243D;
  margin-left: 10px;
}

.tech__content-skills {
  text-align: center;
}

.skill__img {
  width: 60px;
  height: 60px;
  transition: 0.2s all;
}
.skill__img:hover {
  transform: scale(1.1);
}

.skill__wrapper {
  padding: 30px 10px;
  margin-right: 10px;
}

</style>