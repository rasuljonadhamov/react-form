function Form() {
  return (
    <div>
      <form className="form">
        <h1 className="form-title">Contact details</h1>
        <p className="form-info">
          Please fill your information so we can get in touch with you.
        </p>
        <br className="br"/>
        <div className="input-wrapper">
          <h1 className="form-desc">Name</h1>
          <input type="text" placeholder="Enter Name" />
        </div>

        <div className="input-wrapper">
          <h1 className="form-desc">Phone Number</h1>
          <input type="number" placeholder="Enter Number" />
        </div>

        <div className="input-wrapper">
          <h1 className="form-desc">Email </h1>
          <input type="email" placeholder="Enter Email" />
        </div>

        <div className="input-wrapper">
          <h1 className="form-desc">Date</h1>
          <input type="text" placeholder="Enter Date" />
        </div>
      </form>

      <button>Next</button>
    </div>
  );
}

export default Form;
