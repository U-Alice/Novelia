function BTNslider({moveSlide, direction}) {
  return (
  <div  onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
    <i class={direction === "next" ? "fa-solid fa-circle-arrow-right right" : "fa-solid fa-circle-arrow-left left"}></i>
  </div>
  )
}

export default BTNslider;