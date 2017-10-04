export default (id, title = '', body = '') => {
    return (
        `<div id="${id}" class="jw-error" style="position:relative;background:#333">` +
            `<div class="jw-error-msg" style="top:50%;left:50%;position:absolute;align-items:center;background-color:#000;display:flex;padding:20px;transform:translate(-50%,-50%)">` +
                `<div class="jw-icon"></div>` +
                `<div class="jw-title" style="color:#FFF;position:static">` +
                    `<div class="jw-title-primary" style="font:600 14px/1.35 Arial,Helvetica,sans-serif">${title}</div>` +
                    `<div class="jw-title-secondary" style="font:400 14px/1.35 Arial,Helvetica,sans-serif">${body}</div>` +
                `</div>` +
            `</div>` +
        `</div>`
    );
};
