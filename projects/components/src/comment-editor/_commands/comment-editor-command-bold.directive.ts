import { Directive, inject } from '@angular/core';
import { COMMENT_EDITOR, CommentEditor } from '../types';

@Directive({
  selector: '[emrCommentEditorCommandBold]',
  exportAs: 'emrCommentEditorCommandBold',
  standalone: true,
  host: {
    '[disabled]': `commentEditor && commentEditor.api.isCommandDisabled('toggleBold')`,
    '[class.active]': `commentEditor && commentEditor.api.isActive('bold')`,
    '(click)': `onClick()`
  }
})
export class CommentEditorCommandBoldDirective {
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);

  protected onClick() {
    this.commentEditor.api.runCommand('toggleBold');
  }
}
