import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { UserService, IUser } from '../user-service';
import { JsonPipe, NgFor, NgClass, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Modal from 'bootstrap/js/dist/modal';

@Component({
  selector: 'app-user-list',
  imports: [JsonPipe, NgFor, ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList implements OnInit, AfterViewInit {
  products: any[] = [];
  users: IUser[] = [];
  userForm!: FormGroup;
  isEditMode = false;
  editUserId: string | null = null;
  userToDeleteId: string | null = null;
  @ViewChild('deleteModal') deleteModalRef!: ElementRef;
  private deleteModal!: Modal;

  constructor(private userServ: UserService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loadUsers();
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  // load all users
  loadUsers() {
    this.userServ.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.log('Error: ', err)
    })
  }

  // Add and Update User
  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const userData: IUser = this.userForm.value;

    if (this.isEditMode && this.editUserId) {
      // update existing user 
      this.userServ.updateUser(this.editUserId, userData).subscribe({
        next: () => {
          this.resetForm();
          this.loadUsers();
          console.log(`User updated successfully`);
        },
        error: (err) => console.log('Error updating user: ', err)
      })

    } else {
      // create new user
      this.userServ.createUser(userData).subscribe({
        next: () => {
          this.resetForm();
          this.loadUsers();
          console.log(`User created successfully`);
        },
        error: (err) => console.log('Error adding user: ', err)
      })
    }

  }

  // Reset Form
  resetForm() {
    this.userForm.reset();
    this.isEditMode = false;
    this.editUserId = null;
  }

  onEdit(user: IUser) {
    console.log({ user });
    this.isEditMode = true;
    this.editUserId = user._id || null;
    this.userForm.patchValue({
      name: user.name,
      email: user.email
    });
    window.scrollTo({ top: 0 })
  }

  openDeleteModal(id?: string) {
    if (!id) {
      return;
    }

    this.userToDeleteId = id;
    console.log(this.userToDeleteId);
    this.deleteModal.show();
  }

  confirmDelete() {
    if (!this.userToDeleteId) {
      return;
    }
    this.userServ.deleteUser(this.userToDeleteId).subscribe({
      next: (data) => {
        this.loadUsers();
        this.deleteModal.hide();
        console.log(`User deleted successfully`);
      },
      error: (err) => console.log('Error deleting user: ', err)
    })
  }

  ngAfterViewInit() {
    this.deleteModal = new Modal(this.deleteModalRef.nativeElement);
  }
}
