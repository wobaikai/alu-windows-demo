// ===== 网页互动 =====

// 1. 手机上的"☰"按钮：点击后展开 / 收起导航菜单
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// 2. 页脚年份自动变成当前年份（这样以后不用每年改）
document.getElementById("year").textContent = new Date().getFullYear();
