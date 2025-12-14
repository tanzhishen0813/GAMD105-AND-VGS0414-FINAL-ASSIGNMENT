// ------------------------------------
// 搜索功能（过滤卡片）
// ------------------------------------
function searchFood() {
    let keyword = document.getElementById("searchInput").value.toLowerCase().trim();

    // 清空卡片
    cardContainer.innerHTML = "";

    // 用 filter 过滤食物
    let results = foods.filter(food => food.name.toLowerCase().includes(keyword));

    // 如果没有结果
    if (results.length === 0) {
        cardContainer.innerHTML = "<p class='text-center text-danger'>没有找到相关美食。</p>";
        return;
    }

    // 显示过滤后的卡片
    results.forEach(food => {
        cardContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${food.img}" class="card-img-top food-img">
                    <div class="card-body">
                        <h5 class="card-title">${food.name}</h5>
                        <button class="btn btn-primary w-100" onclick="openFood(${foods.indexOf(food)})">查看详情</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// ------------------------------------
// 自动建议功能（Autocomplete）
// ------------------------------------
function showSuggestions() {
    let input = document.getElementById("searchInput").value.toLowerCase().trim();
    let box = document.getElementById("suggestionsBox");

    // 输入为空 → 清空建议列表
    if (input === "") {
        box.innerHTML = "";
        return;
    }

    // 过滤食物名称
    let results = foods.filter(f => f.name.toLowerCase().includes(input));

    // 清空旧建议
    box.innerHTML = "";

    // 插入新的建议
    results.forEach(food => {
        box.innerHTML += `
            <li class="list-group-item list-group-item-action"
                onclick="selectSuggestion('${food.name}')">
                ${food.name}
            </li>
        `;
    });
}

// ------------------------------------
// 用户点了建议 → 输入框填入食物名 + 打开详情 Modal
// ------------------------------------
function selectSuggestion(name) {
    document.getElementById("searchInput").value = name;
    document.getElementById("suggestionsBox").innerHTML = "";

    // 找到匹配的食物 index
    let index = foods.findIndex(f => f.name === name);

    if (index !== -1) openFood(index);
}

// 九种美食资料
const foods = [
    {
        name: "椰浆饭（Nasi Lemak）",
        image: "image/nasi lemak.jpeg",
        recipe: "椰浆饭：白米、椰奶、香兰叶蒸煮；参峇酱：辣椒、虾米、洋葱、糖、酸菜；配料：江鱼仔、花生、鸡蛋、黄瓜。",
        shops: ["Nasi Lemak Antarabangsa", "Village Park"],
        nutrition: ["热量：600–700 kcal", "碳水：70g", "蛋白质：20g", "脂肪：30g"],
        rating: "4.6 / 5",
        comment: "椰奶香浓，参峇微辣好吃。"
    },
    {
        name: "炒粿条（Char Kuey Teow）",
        image: "image/char kuey teow.jpeg",
        recipe: "粿条、虾、鸡蛋、芽菜、韭菜以大火快炒至有锅气。",
        shops: ["Penang Famous CKT", "Sisters CKT"],
        nutrition: ["热量：700–900 kcal", "碳水：85g", "蛋白质：22g", "脂肪：38g"],
        rating: "4.7 / 5",
        comment: "火候十足有锅气。"
    },
    {
        name: "印度煎饼（Roti Canai）",
        image: "image/roti canai.jpeg",
        recipe: "面粉加水与酥油制成面团，拉薄甩飞后煎至金黄，搭配咖喱食用。",
        shops: ["Raju", "KAYU Nasi Kandar"],
        nutrition: ["热量：320 kcal / 片", "碳水：40g", "蛋白质：7g", "脂肪：15g"],
        rating: "4.5 / 5",
        comment: "外酥内软。"
    },
    {
        name: "叻沙（Laksa）",
        image: "image/laksa.webp",
        recipe: "叻沙汤加入椰奶，搭配面条、虾、鱼饼与芽菜。",
        shops: ["Penang Assam Laksa", "Auntie Laksa"],
        nutrition: ["热量：550–650 kcal", "碳水：60g", "蛋白质：18g", "脂肪：25g"],
        rating: "4.6 / 5",
        comment: "味道酸辣开胃。"
    },
    {
        name: "海南鸡饭（Hainan Chicken Rice）",
        image: "image/hainan chicken rice.jpeg",
        recipe: "蒜香鸡油饭搭配白切鸡或烤鸡，附姜蓉、辣椒酱、深酱油。",
        shops: ["海南记", "文良港鸡饭"],
        nutrition: ["热量：600 kcal", "碳水：65g", "蛋白质：30g", "脂肪：20g"],
        rating: "4.7 / 5",
        comment: "鸡肉鲜嫩、饭香十足。"
    },
    {
        name: "沙爹（Satay）",
        image: "image/satay.jpeg",
        recipe: "腌料包含姜黄与香料，烤至焦香后配花生酱与 Ketupat。",
        shops: ["Kajang Satay", "Satay Station"],
        nutrition: ["热量：300 kcal（6 sticks）", "碳水：10g", "蛋白质：22g", "脂肪：18g"],
        rating: "4.8 / 5",
        comment: "花生酱浓郁又香。"
    },
    {
        name: "拉茶（Teh Tarik）",
        image: "image/teh tarik.jpeg",
        recipe: "红茶与炼奶来回拉抖产生香浓泡沫，可选择热或冰。",
        shops: ["Mamak 档", "Teh Tarik Place"],
        nutrition: ["热量：180–220 kcal", "碳水：28g", "蛋白质：4g", "脂肪：6g"],
        rating: "4.5 / 5",
        comment: "甜度刚刚好。"
    },
    {
        name: "刨冰（ABC / Ais Batu Campur）",
        image: "image/abc.jpg",
        recipe: "刨冰加入红豆、玉米、仙草、炼奶、糖浆等配料堆叠而成。",
        shops: ["冰室", "Mamak 档"],
        nutrition: ["热量：300–450 kcal", "碳水：60g", "蛋白质：5g", "脂肪：6g"],
        rating: "4.3 / 5",
        comment: "冰凉解暑。"
    },
    {
        name: "炒面（Mee Goreng）",
        image: "image/mee goreng.jpeg",
        recipe: "黄面与豆干、土豆、鸡蛋一起炒，加入甜酱油与番茄酱调味。",
        shops: ["Mamak 档", "印度炒面店"],
        nutrition: ["热量：550–700 kcal", "碳水：80g", "蛋白质：20g", "脂肪：22g"],
        rating: "4.4 / 5",
        comment: "炒得香甜微辣。"
    }
];

// --------------------------------------------------
// Modal 显示完整美食详情（唯一使用这个）
// --------------------------------------------------
function showFoodDetail(index) {
    const food = foods[index];

    document.getElementById("modalFoodImg").src = food.image;
    document.getElementById("modalFoodName").textContent = food.name;
    document.getElementById("modalRecipe").textContent = food.recipe;

    // 店家
    const shopList = document.getElementById("modalShops");
    shopList.innerHTML = "";
    food.shops.forEach(s => {
        let li = document.createElement("li");
        li.textContent = s;
        shopList.appendChild(li);
    });

    // 营养
    const nutriList = document.getElementById("modalNutrition");
    nutriList.innerHTML = "";
    food.nutrition.forEach(n => {
        let li = document.createElement("li");
        li.textContent = n;
        nutriList.appendChild(li);
    });

    document.getElementById("modalRating").textContent = food.rating;
    document.getElementById("modalComment").textContent = food.comment;

    // 显示 Modal
    new bootstrap.Modal(document.getElementById("foodModal")).show();
}


// --------------------------------------------------
// 动态插入卡片
// --------------------------------------------------
const cardContainer = document.getElementById("foodCards");

if (cardContainer) {
    foods.forEach((food, index) => {
        cardContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${food.image}" class="card-img-top food-img">
                    <div class="card-body">
                        <h5 class="card-title">${food.name}</h5>
                        <button class="btn btn-primary w-100" onclick="showFoodDetail(${index})">查看详情</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// -------------------------
// 联系表单验证
// -------------------------

function validateForm() {
    let search = document.getElementById("searchInput").value.trim();
    let name = document.getElementById("nameInput").value.trim();
    let email = document.getElementById("emailInput").value.trim();
    let message = document.getElementById("messageInput").value.trim();
    let rating = document.getElementById("ratingInput").value;
    let recommend = document.getElementById("recommendInput").value;

    let valid = true;

    // 清空错误提示
    document.getElementById("searchError").innerHTML = "";
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";
    document.getElementById("ratingError").innerHTML = "";
    document.getElementById("recommendError").innerHTML = "";

    // 搜索不能为空
    if (search === "") {
        document.getElementById("searchError").innerHTML = "搜索内容不能为空！";
        valid = false;
    }

    // 名字不能为空
    if (name === "") {
        document.getElementById("nameError").innerHTML = "名字不能为空！";
        valid = false;
    }

    // Email 格式
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "请输入有效的电邮信箱！";
        valid = false;
    }

    // 留言不能为空
    if (message === "") {
        document.getElementById("messageError").innerHTML = "留言内容不能为空！";
        valid = false;
    }

    // 必须评分
    if (rating === "") {
        document.getElementById("ratingError").innerHTML = "请选择评分！";
        valid = false;
    }

    // 必须选择 Yes / No
    if (recommend === "") {
        document.getElementById("recommendError").innerHTML = "请选择一个选项！";
        valid = false;
    }

    // 全部通过
    if (valid) {
        alert("提交成功！感谢你的反馈！");
    }

    return valid;
}