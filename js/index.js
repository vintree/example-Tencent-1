~function() {
    /*
        e: 按钮点击事件
        d: 获取数据 && 放置弹层中
    */
    var listDOM = document.querySelector('.index-list');
    listDOM.addEventListener('click', function(e) {//绑定在父节点上
        var dom, img, name, describe, html, popNode, popClassName;
        if(e.target.className === 'index-unit-body-btn') {
            dom = e.target;
            // 获取头像、名称、评论
            img = dom.parentNode.previousElementSibling.childNodes[1].childNodes[1].getAttribute('src');
            name = dom.parentNode.previousElementSibling.childNodes[3].innerText;
            describe = dom.previousElementSibling.getAttribute('data-full');
            // 设置到pop模块当中
            document.querySelector('.pop-msg-img').setAttribute('src', img);
            document.querySelector('.pop-msg-name').innerText = name;
            document.querySelector('.pop-msg-describe').innerText = describe;
            // 获取pop节点 && 获取pop class字符串
            popNode = document.querySelector('.pop-msg');
            popClassName = popNode.className;
            // 开始设置class
            if(popClassName != null && popClassName.indexOf('unactive') > -1) {//若有unactive
                popNode.className = popNode.className.replace(' unactive', '');
            }
            popNode.className = popNode.className.replace(' dnone', '');
            popNode.className = popNode.className + ' active';
        }
    });

    /*
        e: 弹层关闭事件
        d:
    */
    var closeDOM = document.querySelector('.pop-msg-close');
    closeDOM.addEventListener('click', function(e) {//绑定到自身节点上
        var popNode, popClassName;
        // 获取pop节点 && 获取pop class字符串
        popNode = e.target.parentNode.parentNode;
        popClassName = popNode.className;
        // 开始设置class
        if(popClassName != null && popClassName.indexOf('active') > -1) {//若有active
            popNode.className = popNode.className.replace(' active', '');
        }
        popNode.className = popNode.className + ' unactive';
        // 由于不是动态添加模块，需将模块还原成初始状态
        setTimeout(function() {
            popNode.className = popNode.className.replace(' unactive', '');
            popNode.className = popNode.className + ' dnone';
        }, 300);
    });
}()
