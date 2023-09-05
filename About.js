import React from 'react'

export default function About() {
  return (
    <div>

<h1>Stacks</h1>

<div class="hstack gap-2">
  <button type="button" class="btn btn-primary">oscar</button>
  <button type="button" class="btn btn-primary">dolores</button>
  <button type="button" class="btn btn-primary">bubbles</button>
  
  <div class="ms-auto hstack gap-2">
    <label for="humanName" class="form-label fw-bold">Name</label>
    <input type="name" class="form-control" id="humanName" aria-describedby="nameHelp"/>
    <span class="vr"></span>
    <button type="button" class="btn btn-secondary">go</button>
  </div>
</div>


    </div>
  )
}
