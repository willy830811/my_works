import axios from 'axios';




function data() {
	axios.post('http://test1.hokhang.com/hksCloudService/getEventService.php?appId=119871&dataGroupCode=01&primaryCategory=&secondarCategory=&index=0&limit=30&lat=25.000000&lon=121.000000'
	)
	.then(function (response) {
		
	})
	.catch(function (error) {
		reject(error);
	});
}


let newPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve(data());

  } else {
    reject('失敗中的失敗(rejected)')
  }
});

newPromise.then((data)=> {
  // 成功訊息 (需要 3 秒)
  console.log(data);
}).catch((err)=> {
  // 失敗訊息 (立即)
  console.log(err)
});

//export default data;