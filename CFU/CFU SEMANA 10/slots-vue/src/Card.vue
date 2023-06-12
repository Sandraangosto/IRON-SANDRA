<template>
  <article class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
  </article>
</template>

<style>
.container {
  width: 20rem;
  background: lightgray;
}
 
header {
  color: blue;
}
</style>
