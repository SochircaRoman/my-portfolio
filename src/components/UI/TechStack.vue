<script>
  export default {
    props: {
      skills: {
          type: Array,
          required: true,
      }
  },
    
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
          <span class="tech__menu-name">{{ skill.type }}</span>
        </div>
      </div>
      
      <div class="tech__content-skills">

        <span
          class="skill__wrapper noselect"
          v-for="(value, index) in skills.technologies"
          :key="index"
        >
          <span><img class="skill__img" :src="'../../skills/' + value.image" :alt="value.title"></span>
        </span>

      </div>
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