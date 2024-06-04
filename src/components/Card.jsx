
function Card(props) {


    return (
      <>
        <div className="flex justify-center gap-6 flex-wrap mt-6">
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={props.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{props.name}</h2>
    <p className="text-sm">{props.des}</p>
    <div className="card-actions">
      <button className="btn btn-primary  mt-2">Buy Now</button>
    </div>
  </div>
</div>
        </div>
      </>
    )
  }
  
  export default Card