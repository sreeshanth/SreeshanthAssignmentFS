import React from "react";

function Page2({ peopleJSON }) {
//   console.log(peopleJSON);
  return (
    <div style={{ marginTop: "50px" }}>
        <h3 style={{marginLeft:"50px"}} >List of friends for people who are not active and whose Balance is less than $2000</h3>
      <div class="row">
        {peopleJSON.map((item, index) => {
            let num = item.balance.split('$');
            let amount = num[1].split(',');
            
          if(item.isActive == false && Number(amount.join(""))<2000){  
          return (
            <div class="col-sm-5" key={index} style={{ margin: "30px" }}>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{item.name} : </h5>
                  <h5 class="card-text">Friends List</h5>
                  <ul class="list-group">
                    {item.friends.map((item1, index1) => {
                      return (
                        <li key={index1} class="list-group-item">
                          {item1.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
                }
                else {
                    return <></>
                }
        })}
      </div>
    </div>
  );
}

export default Page2;
