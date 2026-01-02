<template>
  <div class="outer-all">
    <div class="first-part">
      <h2>
        <slot name="heading"></slot>
      </h2>
      <p class="desc">
        <slot name="description"></slot>
      </p>
      <slot name="others"></slot>
    </div>
    <div class="second-part">
      <slot name="second"></slot>
    </div>
  </div>
</template>

<style scoped>
.outer-all {
  padding: 0 40px;
  padding-top: 10rem;
  display: grid;
  grid-template-columns: 60% 40%;
}
h2 {
  font-family: 'Alumni Sans', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 9.6rem;
  letter-spacing: 5px;
}
.desc {
  font-size: 2.4rem;
  color: #ccc;
  opacity: 0.7;
  letter-spacing: 2px;
}
.first-part {
  /* background-color: #333; */
}
.second-part {
  /* background-color: #444; */
}
</style>
