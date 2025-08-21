import { Component, signal } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-botao-adicionar-conta',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-adicionar-conta.component.html',
  styleUrl: './botao-adicionar-conta.component.css'
})
export class BotaoAdicionarContaComponent {
  modalAberto = signal(false);

  novaContaForm = {
    nome: '',
    saldoInicial: '',
  }

  abrirModal() {
    this.modalAberto.set(true);
  }
  aoSubmeter() {
    console.log(this.novaContaForm);
  }
}
