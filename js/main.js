'use strict'


$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear'
        });
})

$(document).ready(function() {
    $('.news-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        adaptiveHeight: true
        });
})

function openWindow(classParent) {
    
    //убираем-возвращаем картинки с фоном
    let img = document.querySelector(classParent+'  .img');
    img.classList.toggle(classParent==".trade"?"img__toggle":"img__toggle-2");
    let empty = document.querySelector(classParent+" .project__empty-bg");
    empty.classList.toggle("empty-bg__toggle");
    
    //берем наш параграф из проекта в котором расположена кнопка
    let pText = document.querySelector(classParent+'  .text');
    
    //если параграфа нет - добавляем его с новым классом "newP", если есть - удаляем
    if(!document.querySelector(".newP")) {
        let newP = document.createElement("p");
        newP.innerHTML = "They are capable of influencing every aspect of our daily lives, from our physical health to our social behaviors. I’m sure you’ve heard the adage, “As you think, so shall you be.”    If we want to improve our lives, we must first improve our thoughts. Harnessing the power of thought in a positive way has the ability to create great change in our lives, including our financial well-being and prosperity. But how? How do we take something as intangible as thoughts, and manifest them into a physical reality?We must first understand that being prosperous is more than having a lot of money. Prosperity is a mindset, a way of interacting in our lives, and a way of thinking. Mastering this train of thought is not easy, but it is simple enough if we keep working on it consistently.    Following are some ideas to help you improve your thoughts, and ultimately attract more prosperity into your life:    Be grateful for the blessings in your life right now. Take a few minutes each day to express heartfelt gratitude for the good things in your life. Even more powerful, write a few of these blessings down each day. This helps to put your focus in the right direction — on abundance, not lack.    Use positive affirmations to begin training yourself to think positively. Use “I am” statements such as “I am worthy of all that is good.” Write the statements down and repeat them nightly before bed. Over time, this will implant these thoughts into your subconscious mind, and you will begin to naturally believe them.    Creative visualization can help you achieve prosperity by determining what it is you wish to achieve, and then thoroughly creating that image in your mind. This works in the same way affirmations do. Our subconscious will fill with images of prosperity, and eventually these subconscious “truths” will manifest in the physical. “See” yourself as being prosperous, and you will become so.    Encourage yourself with the belief that you can achieve great things. This could also be one of your affirmations, but expand on it. If you know you can earn a certain salary, tell yourself you can earn more. Allow yourself to believe all things are possible, and you will gain the confidence needed to reach higher than you ever imagined you could. If you believe you can do it, you are more likely to take the risks associated with people who are highly successful. Prosperity and success go hand in hand, so take risks and aim higher.    Start a savings account. As strange as it sounds, think about this: Like Attracts Like. Even if you can only afford to put a few dollars into your account every month, it will begin to build up and attract more money.    Finally, believe you are already wealthy. The creative ability of our thoughts is such that we lend more power and energy to whatever we consistently focus on. Focusing on lack will create more lack. Focusing on wealth and prosperity will create . . . guess what?Remember that this is a process. You likely won’t change your circumstances in one day. But over time, with consistent focus, your thoughts will begin to attract what you want. Once you master this power of thought, there are truly no limits to what you can create!";
        newP.classList.toggle("newP");
    
        pText.parentNode.insertBefore(newP, pText.nextSibling);
    }else{
        document.querySelector(".newP").remove();
    }
    
}
