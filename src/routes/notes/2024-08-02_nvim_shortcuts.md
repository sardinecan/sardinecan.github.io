---
title: "Raccourcis Neovim"
date: 2024-08-02
author: "jmorvan"
category: 'config'
keywords: "editeur ; éditeur ; editor ; vim ; nvim ; neovim ; shortcuts"
---

# Nvim shortcuts

Here are the shortcuts I use with my [Neovim config](https://github.com/sardinecan/dotfiles/tree/main/private_dot_config/nvim).

| label					| mode  		| shortcut  | command   | 
| :-------			| -------:	| -------:  | -------:  |
| Search    | n | `/`   |   |
| Reach previous / next paragraph (or function/bloc)    | n | `{` / `}` |   |
| Insert before cursor / line   | n | `ì` / `I` |   |
| Insert (add) before cursor / line | n | `a` / `A` |   |
| Insert (open) new line after / before | n | `o` / `O` |   |
| Insert (add) at end of word  | n | `ea` |   |
| Left  | n, v   | `h`   |   |
| Down  | n, v   | `j`   |   |
| Up  | n, v   | `k`   |   |
| Down (multilines)  | n  | `gj`   |   |
| Up (multilines) | n   | `gk`   |   |
| Right  | n, v   | `l`   |   |
| Backspace | i   | `&lt;C&gt;-h`   |   |
| Backspace word | i   | `&lt;C&gt;-w`   |   |
| Left pane | n, v   | `&lt;C&gt;-h`   |   |
| Down pane | n, v   | `&lt;C&gt;-j`   |   |
| Up pane | n, v   | `&lt;C&gt;-k`   |   |
| Right pane | n, v   | `&lt;C&gt;-l`   |   |
| Go to associate char | n | `%`   |    |
| Go to first/last line | n | `gg` / `G`    |   |
| copy to clipboard			| v			| `&lt;leader&gt; y`		|  |
| scroll down					| n			| `&lt;crtl&gt; b`			|   | 
| scroll up					| n			| `&lt;crtl&gt; f`			|   |
| show autocomplete 			| i			| `&lt;crtl&gt; espace`	|   |
| confirm autocomplete		| i			| `&lt;return&gt;`		|   |
| scroll documentation back	| i			| `&lt;crtl&gt; b`			|   |
| scroll documentation fw		| i			| `&lt;crtl&gt; f`			|   |
| autocomplete abord			| i			| `&lt;crtl&gt; e`			|   |
| Lists LSP references for word under the cursor  | n | `gr`  | `&lt;cmd&gt;Telescope lsp_references&lt;CR&gt;` |
| Displays hover information about the symbol under the cursor  | n | `K` | `vim.lsp.buf.hover` |
| Jumps to the declaration of the symbol under the cursor  | n  | `gD`  | `vim.lsp.buf.declaration` |
| Goto the definition of the word under the cursor, if there's only one, otherwise show all options in Telescope | n | `gd` | `&lt;cmd&gt;Telescope lsp_definitions&lt;CR&gt;` |
| Jumps to the definition of the type of the symbol under the cursor | n | `td`  | `vim.lsp.buf.type_definition` |
| Goto the implementation of the word under the cursor if there's only one, otherwise show all options in Telescope | n | `gi`  | `&lt;cmd&gt;Telescope lsp_implementations&lt;CR&gt;`  |
| Displays signature information about the symbol under the cursor in a floating window  | n | `&lt;C-k&gt;` | `vim.lsp.buf.signature_help` |
| Add the folder at path to the workspace folders. If `&#123;path&#125;` is not provided, the user will be prompted for a path using input()  | n | `&lt;leader&gt;wa`  | `vim.lsp.buf.add_workspace_folder` |
| Remove the folder at path from the workspace folders. If `&#123;path&#125;` is not provided, the user will be prompted for a path using input() | n | `&lt;leader&gt;wr`  | `vim.lsp.buf.remove_workspace_folder` |
| List workspace folders  | n | `&lt;leader&gt;wl` |  `vim.lsp.buf.list_workspace_folders()`  |
| Lists Diagnostics for current buffer  | n | `&lt;leader&gt;D`  | `&lt;cmd&gt;Telescope diagnostics bufnr=0&lt;CR&gt;` |
| Show diagnostics in a floating window   | n  | `&lt;leader&gt;d`  | `vim.diagnostic.open_float` |
| Go to previous error  | n | `[d`  | `vim.diagnostic.goto_prev`  |
| Got to next error | n | `]d`  | `vim.diagnostic.goto_next`  |
| Add buffer diagnostics to the location list | n | `&lt;leader&gt;l` | `vim.diagnostic.setloclist` |
| Selects a code action available at the current cursor position  | n, v  | `ca` | `vim.lsp.buf.code_action` |
| restart lsp | n | `&lt;leader&gt;rs` | `:LspRestart&lt;CR&gt;` |
| Renames all references to the symbol under the cursor (rename functions) | n | `&lt;leader&gt;rn` | `vim.lsp.buf.rename` |
| Open Neotree filesystem on the left  | n | `&lt;C-n&gt;`   | `:Neotree filesystem reveal left&lt;CR&gt;` |
| Close Neotree  | n | `&lt;leader&gt;q`   | `:Neotree close&lt;CR&gt;`  |
| Show open buffers on a float  | n | `&lt;leader&gt;bf`  | `:Neotree buffers reveal float&lt;CR&gt;` |
| Show Git status  | n | `&lt;leader&gt;gst`   | `:Neotree git_status reveal float&lt;CR&gt;` |
| Git add all (gst reveal) | n | `A`   | `git_add_all` |
| Git unstage (gst reveal)  | n | `gu`  | `git_unstage_file`
| Git add file (gst reveal) | n | `ga`  | `git_add_file`
| git revert file (gst reveal) | n | `gr`  | `git_revert_file`
| Git commit (gst reveal) | n | `gc`  | `git_commit`
| Git push (gst reveal) | n | `gp`  | `git_push`
| Git commit and push (gst reveal)  | n | `gg`  | `git_commit_and_push`
| Find files  | n | `&lt;leader&gt;p` | `builtin.find_files`  |
| Search (in Neotree pane)  | n | `fg` |   |
| Live Grep  | n | `&lt;leader&gt;fg`  | `builtin.live_grep` |


See also :
- [Neovim LSP documentation](https://neovim.io/doc/user/lsp.html)
- [Neovim Diagnostic documentation](https://neovim.io/doc/user/diagnostic.html)
- [Telescope.nvim](https://github.com/nvim-telescope/telescope.nvim)
- [LazyVim Telescope documentation](http://www.lazyvim.org/extras/editor/telescope)
- [Neo-tree package](https://github.com/nvim-neo-tree/neo-tree.nvim)
